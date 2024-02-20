import NavBar from '../components/navbar'
import Features from '../components/features';
import Foot from '../components/foot';
import '../App.css';
import React, { useState} from 'react';
import styled from "styled-components";
import Axios from "axios";
import CityComponent from '../components/CityComponent';
import WeatherComponent from '../components/WeatherInfoComponent';
import Locations from '../components/Locations';
import Calendar from '../components/Calendar';
import Health from '../components/Health';
import Gemini from '../components/Gemini';

export const WeatherIcons = {
  "01d": "../icons/sunny.svg",
  "01n": "../icons/night.svg",
  "02d": "../icons/day.svg",
  "02n": "../icons/cloudy-night.svg",
  "03d": "../icons/cloudy.svg",
  "03n": "../icons/cloudy.svg",
  "04d": "../icons/perfect-day.svg",
  "04n": "../icons/cloudy-night.svg",
  "09d": "../icons/rain.svg",
  "09n": "../icons/rain-night.svg",
  "10d": "../icons/rain.svg",
  "10n": "../icons/rain-night.svg",
  "11d": "../icons/storm.svg",
  "11n": "../icons/storm.svg",
  "12n": "../icons/humidity.svg",

};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const Frame = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  flex: 1;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-left: 10px; 
`;

function Home() {

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd20a2207cc025aec33515aafb67a2ff`,
    );
    updateWeather(response.data);
  };

  return (
    <div>
    <NavBar tcolor={"text-[#4285F4]"}/>
    <Features size='w-auto h-[30rem] mt-5 mr-2' tcolor="text-[#4285F4]" image_url='/images/chat.jpg' heading='Ask Your Doubts?' reverse='flex flex-row gap-20 justify-center ' t_color='bg-[#4285F4]' redirect='chat' body=" SmartPing's Chatbot functionality provides on-demand assistance, addressing users  ' inquiries and doubts promptly. Harnessing natural language processing capabilities, the Chatbot swiftly addresses user inquiries, offering guidance, information, and troubleshooting assistance. Whether users seek directions, recommendations, This interactive feature ensures a personalized and efficient user experience, catering to diverse needs and preferences." />
    <Features size='w-auto h-[30rem] my-5 mr-2' tcolor="text-[#099884]" image_url='/images/map.jpg' heading='Get Fastest Route' reverse='flex flex-row-reverse  justify-center my-10  ' t_color='bg-[#099884]' redirect='traffic' body="SmartPing's Traffic Analyzer utilizes real-time data to identify the quickest routes, reducing congestion and expediting travel. By analyzing traffic patterns and road conditions, it guides users towards efficient pathways, minimizing delays and enhancing overall commuting experiences, ultimately facilitating smoother traffic flow and reducing congestion." />
    <Features size='w-auto h-[25rem] my-5 mr-2 ml-4' tcolor="text-[#E94235]" image_url='/images/health.jpg' heading='Health Updates' reverse='flex flex-row gap-20 justify-center my-10' t_color='bg-[#E94235]'  redirect='health' body=" SmartPing aims to streamline daily life by providing essential services and information at the fingertips of its users. One of its standout features is the Health Analysis page, offering a comprehensive overview of nearby medical resources such as pharmacies and hospitals, along with essential health precautions relevant to the user's location." />
    <Features size='w-auto h-[20rem] my-5 mr-2 self-center' tcolor="text-[#FABB05]" image_url='/images/anal.jpg' heading='Analyze Image' reverse='flex flex-row-reverse justify-center my-10 mt-20' t_color='bg-[#FABB05]'  redirect='imguploader' body="Image Analyzer feature leverages the Gemini API to analyze uploaded images, providing comprehensive details and information. By harnessing advanced image recognition technology, it identifies objects, landmarks, and even text within images, offering users relevant information such as location details, historical facts, or product identification. This innovative tool enhances users' understanding of their surroundings and facilitates effortless exploration. Whether seeking to learn more about a landmark or identify an unfamiliar object."/>
    <Foot/>
    <React.Fragment>
      <Locations />
      <Frame>
        <LeftSide>
          <Calendar />
        </LeftSide>
        <RightSide>
        <Container>
      <AppLabel>Weather Update</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
    </RightSide>
    <RightSide>
          <Health />
          <Gemini />
        </RightSide>
      </Frame>
    </React.Fragment>
    </div>
  )
}
export default Home;