import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import Fade from 'react-reveal/Fade';

import { generate } from "./redux/features/generateQuotes";
import '../node_modules/font-awesome/css/font-awesome.min.css';

import "./App.css";

const App = () => {
  const color = useSelector((state: RootState) => state.random.color);
  const quote = useSelector((state: RootState) => state.random.quote);
  const author = useSelector((state: RootState) => state.random.author);

  const dispatch = useDispatch();

  return (
    <div
      className='container'
      style={{
        "backgroundColor": `${color}`,
        "color": `${color}`
      }}>
      <div className='container_extra-contain'>
        <div className='container_contain'>
          <Fade top>
            <div className='container_contain-quote'>
              <i className='fa fa-quote-left' aria-hidden='true' />
              {' '}{quote}
            </div>
          </Fade>
          <Fade top>
            <div className='container_contain-author'>
            - {author}
            </div>
          </Fade>
          <div className='container_contain-button'>
            <div className='left_button'>
              <a target='_blank'
                rel='noreferrer'
                title='Tweet this quote!'
                href='https://twitter.com/?logout=1652180701371tum'
              >
                <div
                  id='first_button'
                  style={{ "backgroundColor": `${color}` }}>
                  <i className='fa fa-twitter fa-2x' aria-hidden='true' />
                </div>
              </a>
              <a target='_blank'
                rel='noreferrer'
                title='Post this quote on tumblr!'
                href='https://www.tumblr.com/explore/trending?source=homepage_explore'>
                <div
                  id='second_button'
                  style={{ "backgroundColor": `${color}` }}>
                  <i className='fa fa-tumblr fa-2x' aria-hidden='true' />
                </div>
              </a>
            </div>
            <div className='right_button'>
              <button
                id='third_button'
                type='submit'
                onClick={() => dispatch(generate())}
                style={{ "backgroundColor": `${color}` }}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
        <div className='container_author'>
          <Fade>
            by Minh Duc Nguyen
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default App;
