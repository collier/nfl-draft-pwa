import React from 'react';
import { F7App, View } from 'framework7-react';
import MainPage from './MainPage';

function App() {
  const f7params = {
    name: 'NFL Drafts',
    id: 'com.collier.nfldrafts',
    theme: 'auto',
    autoDarkTheme: true,
    iosTranslucentBars: false
  };

  return (
    <F7App params={f7params}>
      <View main url="/" className="safe-areas">
        <MainPage />
      </View>
    </F7App>
  );
}

export default App;
  
