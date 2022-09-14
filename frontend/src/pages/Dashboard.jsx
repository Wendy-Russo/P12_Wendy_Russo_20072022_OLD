import React, { useState, useEffect }  from 'react';
import './Dashboard.scss';
import TopNav from "../components/Nav/TopNav/TopNav.jsx";
import SideNav from "../components/Nav/SideNav/SideNav.jsx";
import Greetings from '../components/Greetings/Greetings';
import NutrientCard from '../components/Cards/Card/NutrientCard';
import BarChartDailyActivity from '../components/Charts/BarChartDailyActivity/BarChartDailyActivity';
import PieChartScore from "../components/Charts/PieChartScore/PieChartScore"
import RadialChart from '../components/Charts/RadialChart/RadialChart';
import LineChart from '../components/Charts/LineChart/LineChart';
import {getUserData} from '../service/getUserData';

const USER = 12; //12 or 18

function Dashboard(){

  const [mainData, setMainData] = useState(0);
  const [activityData, setActivityData] = useState(0);
  const [perfData, setPerfData] = useState(0);
  const [averageData, setAverageData] = useState(0);

  useEffect(() => {
    getUserData(USER,"main").then(DATA => setMainData(DATA));
    getUserData(USER,"activity").then(DATA => setActivityData(DATA));
    getUserData(USER,"performance").then(DATA => setPerfData(DATA));
    getUserData(USER,"average").then(DATA => setAverageData(DATA));
  }, [])

  const FIRST_NAME = mainData.userInfos ? mainData.userInfos.firstName : "";
  const SCORE_12 = mainData.todayScore ? mainData.todayScore : "";
  const SCORE_18 = mainData.score ? mainData.score : "";
  const CAL_COUNT = mainData.keyData ? mainData.keyData.calorieCount : "";
  const PROT_COUNT = mainData.keyData ? mainData.keyData.proteinCount : "";
  const CARB_COUNT = mainData.keyData ? mainData.keyData.carbohydrateCount : "";
  const LIP_COUNT = mainData.keyData ? mainData.keyData.lipidCount : "";
  const SESSIONS = activityData.sessions ? activityData.sessions : "";
  const P_DATA = perfData.data ? perfData : "";
  const AVG_DATA = averageData.sessions ? averageData : "";

  return (
    <>
      <header>
        <TopNav/>
        <SideNav/>
      </header>

      <main>

        <section className="greetings-section" >
          <Greetings  firstName={FIRST_NAME} />
        </section>

        <section className="charts-section" >
          <BarChartDailyActivity sessions={SESSIONS} />
          <LineChart average={AVG_DATA}/>
          <RadialChart perf={P_DATA}/>
          <PieChartScore score={USER === 18 ? SCORE_18 : SCORE_12} />
        </section>

        <section className="cards-section" >
          <NutrientCard quantity={CAL_COUNT}  nutrient="calories"  />
          <NutrientCard quantity={PROT_COUNT} nutrient="proteines" />
          <NutrientCard quantity={CARB_COUNT} nutrient="glucides"  />
          <NutrientCard quantity={LIP_COUNT}  nutrient="lipides"   />
        </section>

      </main>
      
    </>

  );
}

export default Dashboard;
