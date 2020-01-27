import React, { useState } from 'react';
import { Page, Navbar, Toolbar, Link, Tabs, Tab } from 'framework7-react';
import cn from 'classnames';
import _range from 'lodash/range';
import LeagueTab from './LeagueTab';
import TeamTab from './TeamTab';
import EmptyTab from './EmptyTab';
import TabFilters from './TabFilters';
import TabFilter from './TabFilter';
import LeagueFilters from './LeagueFilters';
import TeamFilters from './TeamFilters';
import SearchFilters from './SearchFilters';
import styles from '../styles/MainPage.module.css';

function MainPage() {
  const [activeTab, setActiveTab] = useState('league');
  const [leagueYear, setLeagueYear] = useState('2018');
  const [teamId, setTeamId] = useState('');
  const [teamYear, setTeamYear] = useState('');

  const yearOptions = _range(2013, 2019).reverse();

  return (
    <Page pageContent={false}>
      <Navbar title="NFL Drafts"></Navbar>
      <TabFilters>
        <TabFilter isActive={activeTab === 'league'}>
          <LeagueFilters 
            year={leagueYear} 
            setYear={setLeagueYear} 
            yearOptions={yearOptions}
          />
        </TabFilter>
        <TabFilter isActive={activeTab === 'by-team'}>
          <TeamFilters 
            year={teamYear} 
            teamId={teamId} 
            setYear={setTeamYear} 
            setTeamId={setTeamId} 
            yearOptions={yearOptions} 
          />
        </TabFilter>
        {/* <TabFilter isActive={activeTab === 'search'}>
          <SearchFilters />
        </TabFilter> */}
      </TabFilters>
      <Toolbar tabber labels bottom>
        <Link 
          tabLink="#league" 
          iconIos="f7:square_stack_fill" 
          iconMd="material:list" 
          text="League" 
          onClick={() => setActiveTab('league')} 
          tabLinkActive
        />
        <Link 
          tabLink="#by-team" 
          iconIos="f7:paw" 
          iconMd="material:pets" 
          text="By Team" 
          onClick={() => setActiveTab('by-team')} 
        />
        {/* <Link 
          tabLink="#search" 
          iconIos="f7:search" 
          iconMd="material:search" 
          text="Search" onClick={() => setActiveTab('search')} 
        />
        <Link 
          tabLink="#settings" 
          iconIos="f7:settings" 
          iconMd="material:settings" 
          text="Settings" onClick={() => setActiveTab('settings')} 
        /> */}
      </Toolbar>
      <Tabs>
        <Tab id="league" className={cn('page-content', styles.leagueTab)} tabActive>
          <LeagueTab year={leagueYear} />
        </Tab>
        <Tab id="by-team" className={cn('page-content', styles.teamTab)}>
          <TeamTab year={teamYear} teamId={teamId} />
        </Tab>
        {/* <Tab id="search" className={cn('page-content', styles.searchTab)}>
          <EmptyTab />
        </Tab>
        <Tab id="settings" className="page-content">
          <EmptyTab />
        </Tab> */}
      </Tabs>
    </Page>
  );
};

export default MainPage;