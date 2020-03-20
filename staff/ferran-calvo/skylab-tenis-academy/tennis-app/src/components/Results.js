import React, { useEffect } from 'react'
import './Header.sass'
import './Results.sass'

export default function ({results, array}) {
    debugger
    if (results){
        return <>
            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-x1g8"></th>
                        <th className="tg-x1g8">8h</th>
                        <th className="tg-x1g8">9h</th>
                        <th className="tg-x1g8">10h</th>
                        <th className="tg-x1g8">11h</th>
                        <th className="tg-x1g8">12h</th>
                        <th className="tg-x1g8">13h</th>
                        <th className="tg-x1g8">14h</th>
                        <th className="tg-x1g8">15h</th>
                        <th className="tg-x1g8">16h</th>
                        <th className="tg-x1g8">17h</th>
                        <th className="tg-x1g8">18h</th>
                        <th className="tg-r752">19h</th>
                        <th className="tg-x1g8">20h</th>
                        <th className="tg-x1g8">21h</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="tg-x1g8">Court 1</td>
                    <td value="1-08" name="id" className={array.includes('1-08')? 'red': 'green'}></td>
                    <td className={array.includes('1-09')? 'red': 'green'}></td>
                    <td className={array.includes('1-10')? 'red': 'green'}></td>
                    <td className={array.includes('1-11')? 'red': 'green'}></td>
                    <td className={array.includes('1-12')? 'red': 'green'}></td>
                    <td className={array.includes('1-13')? 'red': 'green'}></td>
                    <td className={array.includes('1-14')? 'red': 'green'}></td>                
                    <td className={array.includes('1-15')? 'red': 'green'}></td>                
                    <td className={array.includes('1-16')? 'red': 'green'}></td>               
                    <td className={array.includes('1-17')? 'red': 'green'}></td>
                    <td className={array.includes('1-18')? 'red': 'green'}></td>
                    <td className={array.includes('1-19')? 'red': 'green'}></td>
                    <td className={array.includes('1-20')? 'red': 'green'}></td>
                    <td className={array.includes('1-21')? 'red': 'green'}></td>
                </tr>
                <tr>
                    <td className="tg-x1g8">Court 2</td>
                    <td id="21" className={array.includes('2-08')? 'red': 'green'}></td>
                    <td id="22" className={array.includes('2-09')? 'red': 'green'}></td>
                    <td id="23" className={array.includes('2-10')? 'red': 'green'}></td>
                    <td id="24" className={array.includes('2-11')? 'red': 'green'}></td>
                    <td id="25" className={array.includes('2-12')? 'red': 'green'}></td>
                    <td id="26" className={array.includes('2-13')? 'red': 'green'}></td>
                    <td id="27" className={array.includes('2-14')? 'red': 'green'}></td>
                    <td id="28" className={array.includes('2-15')? 'red': 'green'}></td>
                    <td id="29" className={array.includes('2-16')? 'red': 'green'}></td>
                    <td id="210" className={array.includes('2-17')? 'red': 'green'}></td>
                    <td id="211" className={array.includes('2-18')? 'red': 'green'}></td>
                    <td id="212" className={array.includes('2-19')? 'red': 'green'}></td>
                    <td id="213" className={array.includes('2-20')? 'red': 'green'}></td>
                    <td id="214" className={array.includes('2-21')? 'red': 'green'}></td>
                </tr>
                <tr>
                    <td className="tg-x1g8">Court 3</td>
                    <td id="31" className={array.includes('3-08')? 'red': 'green'}></td>
                    <td id="32" className={array.includes('3-09')? 'red': 'green'}></td>
                    <td id="33" className={array.includes('3-10')? 'red': 'green'}></td>
                    <td id="34" className={array.includes('3-11')? 'red': 'green'}></td>
                    <td id="35" className={array.includes('3-12')? 'red': 'green'}></td>
                    <td id="36" className={array.includes('3-13')? 'red': 'green'}></td>
                    <td id="37" className={array.includes('3-14')? 'red': 'green'}></td>
                    <td id="38" className={array.includes('3-15')? 'red': 'green'}></td>
                    <td id="39" className={array.includes('3-16')? 'red': 'green'}></td>
                    <td id="310" className={array.includes('3-17')? 'red': 'green'}></td>
                    <td id="311"className={array.includes('3-18')? 'red': 'green'}></td>
                    <td id="312" className={array.includes('3-19')? 'red': 'green'}></td>
                    <td id="313" className={array.includes('3-20')? 'red': 'green'}></td>
                    <td id="314" className={array.includes('3-21')? 'red': 'green'}></td>
                </tr>
                <tr>
                    <td>Court 4</td>
                    <td className={array.includes('4-08')? 'red': 'green'}></td>
                    <td className={array.includes('4-09')? 'red': 'green'}></td>
                    <td className={array.includes('4-10')? 'red': 'green'}></td>
                    <td className={array.includes('4-11')? 'red': 'green'}></td>
                    <td className={array.includes('4-12')? 'red': 'green'}></td>
                    <td className={array.includes('4-13')? 'red': 'green'}></td>
                    <td className={array.includes('4-14')? 'red': 'green'}></td>
                    <td className={array.includes('4-15')? 'red': 'green'}></td>
                    <td className={array.includes('4-16')? 'red': 'green'}></td>
                    <td className={array.includes('4-17')? 'red': 'green'}></td>
                    <td className={array.includes('4-18')? 'red': 'green'}></td>
                    <td className={array.includes('4-19')? 'red': 'green'}></td>
                    <td className={array.includes('4-20')? 'red': 'green'}></td>
                    <td className={array.includes('4-21')? 'red': 'green'}></td>
                </tr>
                <tr>
                    <td>Court 5</td>
                    <td className={array.includes('5-08')? 'red': 'green'}></td>
                    <td className={array.includes('5-09')? 'red': 'green'}></td>
                    <td className={array.includes('5-10')? 'red': 'green'}></td>
                    <td className={array.includes('5-11')? 'red': 'green'}></td>
                    <td className={array.includes('5-12')? 'red': 'green'}></td>
                    <td className={array.includes('5-13')? 'red': 'green'}></td>
                    <td className={array.includes('5-14')? 'red': 'green'}></td>
                    <td className={array.includes('5-15')? 'red': 'green'}></td>
                    <td className={array.includes('5-16')? 'red': 'green'}></td>
                    <td className={array.includes('5-17')? 'red': 'green'}></td>
                    <td className={array.includes('5-18')? 'red': 'green'}></td>
                    <td className={array.includes('5-19')? 'red': 'green'}></td>
                    <td className={array.includes('5-20')? 'red': 'green'}></td>
                    <td className={array.includes('5-21')? 'red': 'green'}></td>
                </tr>
                <tr>
                    <td>Court 6</td>
                    <td className={array.includes('6-08')? 'red': 'green'}></td>
                    <td className={array.includes('6-09')? 'red': 'green'}></td>
                    <td className={array.includes('6-10')? 'red': 'green'}></td>
                    <td className={array.includes('6-11')? 'red': 'green'}></td>
                    <td className={array.includes('6-12')? 'red': 'green'}></td>
                    <td className={array.includes('6-13')? 'red': 'green'}></td>
                    <td className={array.includes('6-14')? 'red': 'green'}></td>
                    <td className={array.includes('6-15')? 'red': 'green'}></td>
                    <td className={array.includes('6-16')? 'red': 'green'}></td>
                    <td className={array.includes('6-17')? 'red': 'green'}></td>
                    <td className={array.includes('6-18')? 'red': 'green'}></td>
                    <td className={array.includes('6-19')? 'red': 'green'}></td>
                    <td className={array.includes('6-20')? 'red': 'green'}></td>
                    <td className={array.includes('6-21')? 'red': 'green'}></td>
                </tr>
                <tr>
                    <td>Court 7</td>
                    <td className={array.includes('7-08')? 'red': 'green'}></td>
                    <td className={array.includes('7-09')? 'red': 'green'}></td>
                    <td className={array.includes('7-10')? 'red': 'green'}></td>
                    <td className={array.includes('7-11')? 'red': 'green'}></td>
                    <td className={array.includes('7-12')? 'red': 'green'}></td>
                    <td className={array.includes('7-13')? 'red': 'green'}></td>
                    <td className={array.includes('7-14')? 'red': 'green'}></td>
                    <td className={array.includes('7-15')? 'red': 'green'}></td>
                    <td className={array.includes('7-16')? 'red': 'green'}></td>
                    <td className={array.includes('7-17')? 'red': 'green'}></td>
                    <td className={array.includes('7-18')? 'red': 'green'}></td>
                    <td className={array.includes('7-19')? 'red': 'green'}></td>
                    <td className={array.includes('7-20')? 'red': 'green'}></td>
                    <td className={array.includes('7-21')? 'red': 'green'}></td>
                </tr>
                <tr>
                    <td>Court 8</td>
                    <td className={array.includes('8-08')? 'red': 'green'}></td>
                    <td className={array.includes('8-09')? 'red': 'green'}></td>
                    <td className={array.includes('8-10')? 'red': 'green'}></td>
                    <td className={array.includes('8-11')? 'red': 'green'}></td>
                    <td className={array.includes('8-12')? 'red': 'green'}></td>
                    <td className={array.includes('8-13')? 'red': 'green'}></td>
                    <td className={array.includes('8-14')? 'red': 'green'}></td>
                    <td className={array.includes('8-15')? 'red': 'green'}></td>
                    <td className={array.includes('8-16')? 'red': 'green'}></td>
                    <td className={array.includes('8-17')? 'red': 'green'}></td>
                    <td className={array.includes('8-18')? 'red': 'green'}></td>
                    <td className={array.includes('8-19')? 'red': 'green'}></td>
                    <td className={array.includes('8-20')? 'red': 'green'}></td>
                    <td className={array.includes('8-21')? 'red': 'green'}></td>
                </tr>
                <tr>
                    <td>Court 9</td>
                    <td className={array.includes('9-08')? 'red': 'green'}></td>
                    <td className={array.includes('9-09')? 'red': 'green'}></td>
                    <td className={array.includes('9-10')? 'red': 'green'}></td>
                    <td className={array.includes('9-11')? 'red': 'green'}></td>
                    <td className={array.includes('9-12')? 'red': 'green'}></td>
                    <td className={array.includes('9-13')? 'red': 'green'}></td>
                    <td className={array.includes('9-14')? 'red': 'green'}></td>
                    <td className={array.includes('9-15')? 'red': 'green'}></td>
                    <td className={array.includes('9-16')? 'red': 'green'}></td>
                    <td className={array.includes('9-17')? 'red': 'green'}></td>
                    <td className={array.includes('9-18')? 'red': 'green'}></td>
                    <td className={array.includes('9-19')? 'red': 'green'}></td>
                    <td className={array.includes('9-20')? 'red': 'green'}></td>
                    <td className={array.includes('9-21')? 'red': 'green'}></td>
                </tr>
                <tr>
                    <td >Court 10</td>
                    <td className={array.includes('10-08')? 'red': 'green'}></td>
                    <td className={array.includes('10-09')? 'red': 'green'}></td>
                    <td className={array.includes('10-10')? 'red': 'green'}></td>
                    <td className={array.includes('10-11')? 'red': 'green'}></td>
                    <td className={array.includes('10-12')? 'red': 'green'}></td>
                    <td className={array.includes('10-13')? 'red': 'green'}></td>
                    <td className={array.includes('10-14')? 'red': 'green'}></td>
                    <td className={array.includes('10-15')? 'red': 'green'}></td>
                    <td className={array.includes('10-16')? 'red': 'green'}></td>
                    <td className={array.includes('10-17')? 'red': 'green'}></td>
                    <td className={array.includes('10-18')? 'red': 'green'}></td>
                    <td className={array.includes('10-19')? 'red': 'green'}></td>
                    <td className={array.includes('10-20')? 'red': 'green'}></td>
                    <td className={array.includes('10-21')? 'red': 'green'}></td>
                </tr>    
            </tbody>
        </table>
    </>
}
}