import React, { createContext, useContext, useState } from 'react';
import Hero from '../Components/Global/Hero';
import heroImage from '../assets/img/main-bg.png';
import MovieList from '../Components/Movies/MovieList';
import ShowsList from '../Components/Shows/ShowsList';

// use context
export const LoginContext = createContext();
export const SetLoginContext = createContext();

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);

  document.body.classList = 'bg-zinc-900';
  return (
    <React.Fragment>
      <Hero
        heroImage={heroImage}
        heroTitle={'The Witcher'}
        heroCateg={'TV SHOWS'}
        linkTo={'/shows-detail/71912'}
        year={2019}
        heroDesc={'Set on a fictional, medieval-inspired landmass known as the Continent, The Witcher explores the legend of Geralt of Rivia, Yennefer of Vengerberg and Princess Ciri.'}
      />

      <MovieList className={'mb-5'} topComp={true} slides={true} />
      <ShowsList topComp={false} slides={true} />
    </React.Fragment>
  );
};

export default Home;
