import React, { Component } from 'react';
import Enter from './tittle';
import TButton from './tbutton';
import FButton from './fbutton';
import "./home.css";

export default function Home() {
    return (
        <div class="homee">
            <div class="ent">
            {Enter() }
            <tr class="but">
              <th><TButton/></th>
              <th><FButton/></th>
            </tr>
          </div>
        </div>
    );
    
}
