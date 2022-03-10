import React from 'react';
function Standings() {
  return (
    <div className="Standings">
      <div role="region" aria-labelledby="table1Caption" tabIndex="0">
        <table>
          <caption id="table1Caption">Example Accessible Table</caption>
          <thead>
            <tr>
              <th>Number</th>
              <th>WCAG Compliance Level</th>
              <th>Requirement</th>
              <th>Step Requirement is Hit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>A</td>
              <td>1.3.1 Info and Relationships</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>A</td>
              <td>1.3.2 Meaningful Sequence</td>
              <td>1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>A</td>
              <td>2.1.1 Keyboard</td>
              <td>2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>A</td>
              <td>4.1.2 Name, Role, Value</td>
              <td>2</td>
            </tr>
            <tr>
              <td>5</td>
              <td>AA</td>
              <td>1.4.10 Reflow</td>
              <td>3</td>
            </tr>
            <tr>
              <td>6</td>
              <td>AA</td>
              <td>1.4.11 Non-text Contrast</td>
              <td>3</td>
            </tr>
            <tr>
              <td>7</td>
              <td>AA</td>
              <td>2.4.6 Headings and Labels</td>
              <td>1</td>
            </tr>
            <tr>
              <td>8</td>
              <td>AA</td>
              <td>2.4.7 Focus Visible</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Standings;
