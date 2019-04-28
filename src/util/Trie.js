// recursive search to list all possible matches
const _permutate = (node, prefix) => {
  let complex = Object.keys (node.children).map (k => {
    if (k === '') return node.children [k];
    return _permutate ({
      key: (!prefix ? node.key : prefix) + k,
      children: node.children [k].children
    });
  });
  return _flatten (complex);
}
const _flatten = (arr) => {
  return arr.reduce ((cur, val) => {
    if (Array.isArray (val)) return cur.concat (_flatten (val));
    return cur.concat ([val]);
  }, []);
}
const _compare = (a, b) => {
  if (a.round > b.round) return 1;
  if (b.round > a.round) return -1;
  if (a.pick > b.pick) return 1;
  if (b.pick > a.pick) return -1;
  return a.year - b.year;
}
const _sort = (arr) => {
  return arr.sort (_compare);
}
const _filterDups = (arr) => {
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr [i] === arr [i + 1]) arr.splice (i + 1, 1);
  }
  return arr;
}
export default class Trie {
  constructor (arr=[], key='name', splitStringsOn=' ') {
    this.head = {
      key: '',
      children: {},
      value: []
    }
    arr.forEach (val => {
      this.add (val [key].toLowerCase (), val);
      val [key].toLowerCase ().split (splitStringsOn).forEach (k => {
        this.add (k, val);
      })
    });
  }
  add (word='', value) {
    let chars = word.split ('');
    let node = this.head;
    while (chars.length) {
      let c = chars.shift ();
      if (node.children [c]) {
        node = node.children [c];
      } else {
        node = node.children [c] = {
          key: c,
          children: {}
        }
      }
    }
    if (Array.isArray (node.children ['']))
      node.children [''].push (value);
    else
      node.children [''] = [value];
  }
  find (prefix) {
    try {
      let path = prefix.toLowerCase ().split ('');
      let node = this.head;
      while (path.length) {
        node = node.children [path.shift ()];
      }
      return _filterDups (_sort (_permutate (node, prefix)));
    } catch (e) {
      return [];
    }
  }
  static find (struct, prefix) {
    try {
      let path = prefix.split ();
      let node = struct.head;
      while (path.length) {
        node = node.children [path.shift ()];
      }
      return _permutate (node, prefix);
    } catch (e) {
      return [];
    }
  }
}