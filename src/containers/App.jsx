import React, { useState , useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInicialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
    
    const inicialState = useInicialState(API);
    
    return inicialState.length === 0 ? <h1>Loading ...</h1> : (
            <div className="App">
                < Header />
                < Search />
                {inicialState.mylist.length > 0 &&

                    <Categories title="Mi Lista">
                    <Carousel>
                        {inicialState.trends.map(item =>
                            < CarouselItem key={item.id} {...item} />
                        
                        )}
                        </Carousel>
                    </Categories>
                }
                

                <Categories title ="Tendencias">
                    <Carousel>
                        {inicialState.trends.map(item =>
                            < CarouselItem key={item.id} {...item} />
                        
                        )}
                        
                        
                    </Carousel>
                </Categories>

                <Categories title="Originales de Platzi Video">
                    <Carousel>
                        {inicialState.trends.map(item =>
                            < CarouselItem key={item.id} {...item} />
                        
                        )}
                    </Carousel>
                </Categories>


                < Footer />


                
            </div>
        );
    }

export default App;