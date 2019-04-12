import React from 'react';
import { F7App, Statusbar, View } from 'framework7-react';
import MainPage from './MainPage';

function App() {
  const f7params = {
    name: 'NFL Drafts',
    id: 'com.collier.nfldrafts',
    theme: 'auto',
    touch: {
      fastClicks: true
    }
  };

  return (
    <F7App params={f7params}>
      <Statusbar />
      <View main url="/">
        <MainPage />
      </View>
    </F7App>
  );
}

export default App;
  
