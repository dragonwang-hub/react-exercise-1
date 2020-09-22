import React from 'react';
import './Education.scss';

function Education() {
  return (
    <div className="Education">
      <h3>EDUCATION</h3>
      <ul>
        <li>
          <span className="years">1990</span>
          <a className="education">
            <span className="firstLine">I was born in Katowice</span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            exercitationem, totam, dolores iste dolore est aut modi.
          </a>
        </li>
        <li>
          <span className="years">2005</span>
          <a className="education">
            <span className="firstLine">
              Secondary school specializing in artistic
            </span>
            <br />
            Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum
            ducimus quibusdam quis voluptatibus.
          </a>
        </li>
        <li>
          <span className="years">2009</span>
          <a className="education">
            <span className="firstLine">
              First level graduation in Graphic Design
            </span>
            <br />
            Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus
            quaerat quibusdam perferendis? lusto, quibusdam asperiores underepel
            lat.
          </a>
        </li>
        <li>
          <span className="years">2012</span>
          <a className="education">
            <span className="firstLine">
              Second level graduation in Graphic Design
            </span>
            <br />
            Ducimus, aliquam tempore autem itaque et accusantium!
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Education;
