import React, { useEffect } from 'react'
import './Header.sass'
import './Results.sass'

export default function ({results, array, onClick}) {

    function handleOnClick(id){

    }
    // useEffect(() => {
    // results.map(result => array.push(`${result.court.number}+${(result.date.split('T')[1].split(':')[0])}`))
    //             // document.getElementById({result.court.number}{result.date.split('T')[1].split(':')[0]})
    //     console.log(array)
    // }, [])
    debugger
    if (results){
        return <>
            {results.map(result => <p>{result.date}</p>)}
            {results.map(result => <p>{result.court.number}{result.date.split('T')[1].split(':')[0]}</p>)}
            {/* {results.map(result => {
                array.push(`${result.court.number}+${(result.date.split('T')[1].split(':')[0])}`)}
                    // document.getElementById({result.court.number}{result.date.split('T')[1].split(':')[0]})
            )} */}
            {/* {results.map(result =>  */}
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
                <td id="1-08" className={array.includes('108')? 'red': 'green'} onClick={handleOnClick(this.id)}></td>
                <td className={array.includes('109')? 'red': 'green'}></td>
                <td className={array.includes('110')? 'red': 'green'}></td>
                <td className={array.includes('111')? 'red': 'green'}></td>
                <td className={array.includes('112')? 'red': 'green'}></td>
                <td className={array.includes('113')? 'red': 'green'}></td>
                <td className={array.includes('114')? 'red': 'green'}></td>                
                <td className={array.includes('115')? 'red': 'green'}></td>                
                <td className={array.includes('116')? 'red': 'green'}></td>               
                <td className={array.includes('117')? 'red': 'green'}></td>
                <td className={array.includes('118')? 'red': 'green'}></td>
                <td className={array.includes('119')? 'red': 'green'}></td>
                <td className={array.includes('120')? 'red': 'green'}></td>
                <td className={array.includes('121')? 'red': 'green'}></td>
            </tr>
            <tr>
                <td className="tg-x1g8">Court 2</td>
                <td id="21" className={array.includes('208')? 'red': 'green'}></td>
                <td id="22" className={array.includes('209')? 'red': 'green'}></td>
                <td id="23" className={array.includes('210')? 'red': 'green'}></td>
                <td id="24" className={array.includes('211')? 'red': 'green'}></td>
                <td id="25" className={array.includes('212')? 'red': 'green'}></td>
                <td id="26" className={array.includes('213')? 'red': 'green'}></td>
                <td id="27" className={array.includes('214')? 'red': 'green'}></td>
                <td id="28" className={array.includes('215')? 'red': 'green'}></td>
                <td id="29" className={array.includes('216')? 'red': 'green'}></td>
                <td id="210" className={array.includes('217')? 'red': 'green'}></td>
                <td id="211" className={array.includes('218')? 'red': 'green'}></td>
                <td id="212" className={array.includes('219')? 'red': 'green'}></td>
                <td id="213" className={array.includes('220')? 'red': 'green'}></td>
                <td id="214" className={array.includes('221')? 'red': 'green'}></td>
            </tr>
            <tr>
                <td className="tg-x1g8">Court 3</td>
                <td id="31" className={array.includes('308')? 'red': 'green'}></td>
                <td id="32" className={array.includes('309')? 'red': 'green'}></td>
                <td id="33" className={array.includes('310')? 'red': 'green'}></td>
                <td id="34" className={array.includes('311')? 'red': 'green'}></td>
                <td id="35" className={array.includes('312')? 'red': 'green'}></td>
                <td id="36" className={array.includes('313')? 'red': 'green'}></td>
                <td id="37" className={array.includes('314')? 'red': 'green'}></td>
                <td id="38" className={array.includes('315')? 'red': 'green'}></td>
                <td id="39" className={array.includes('316')? 'red': 'green'}></td>
                <td id="310" className={array.includes('317')? 'red': 'green'}></td>
                <td id="311"className={array.includes('318')? 'red': 'green'}></td>
                <td id="312" className={array.includes('319')? 'red': 'green'}></td>
                <td id="313" className={array.includes('320')? 'red': 'green'}></td>
                <td id="314" className={array.includes('321')? 'red': 'green'}></td>
            </tr>
            <tr>
                <td>Court 4</td>
                <td className={array.includes('408')? 'red': 'green'}></td>
                <td className={array.includes('409')? 'red': 'green'}></td>
                <td className={array.includes('410')? 'red': 'green'}></td>
                <td className={array.includes('411')? 'red': 'green'}></td>
                <td className={array.includes('412')? 'red': 'green'}></td>
                <td className={array.includes('413')? 'red': 'green'}></td>
                <td className={array.includes('414')? 'red': 'green'}></td>
                <td className={array.includes('415')? 'red': 'green'}></td>
                <td className={array.includes('416')? 'red': 'green'}></td>
                <td className={array.includes('417')? 'red': 'green'}></td>
                <td className={array.includes('418')? 'red': 'green'}></td>
                <td className={array.includes('419')? 'red': 'green'}></td>
                <td className={array.includes('420')? 'red': 'green'}></td>
                <td className={array.includes('421')? 'red': 'green'}></td>
            </tr>
            <tr>
                <td>Court 5</td>
                <td className={array.includes('508')? 'red': 'green'}></td>
                <td className={array.includes('509')? 'red': 'green'}></td>
                <td className={array.includes('510')? 'red': 'green'}></td>
                <td className={array.includes('511')? 'red': 'green'}></td>
                <td className={array.includes('512')? 'red': 'green'}></td>
                <td className={array.includes('513')? 'red': 'green'}></td>
                <td className={array.includes('514')? 'red': 'green'}></td>
                <td className={array.includes('515')? 'red': 'green'}></td>
                <td className={array.includes('516')? 'red': 'green'}></td>
                <td className={array.includes('517')? 'red': 'green'}></td>
                <td className={array.includes('518')? 'red': 'green'}></td>
                <td className={array.includes('519')? 'red': 'green'}></td>
                <td className={array.includes('520')? 'red': 'green'}></td>
                <td className={array.includes('521')? 'red': 'green'}></td>
            </tr>
            <tr>
                <td>Court 6</td>
                <td className={array.includes('608')? 'red': 'green'}></td>
                <td className={array.includes('609')? 'red': 'green'}></td>
                <td className={array.includes('610')? 'red': 'green'}></td>
                <td className={array.includes('611')? 'red': 'green'}></td>
                <td className={array.includes('612')? 'red': 'green'}></td>
                <td className={array.includes('613')? 'red': 'green'}></td>
                <td className={array.includes('614')? 'red': 'green'}></td>
                <td className={array.includes('615')? 'red': 'green'}></td>
                <td className={array.includes('616')? 'red': 'green'}></td>
                <td className={array.includes('617')? 'red': 'green'}></td>
                <td className={array.includes('618')? 'red': 'green'}></td>
                <td className={array.includes('619')? 'red': 'green'}></td>
                <td className={array.includes('620')? 'red': 'green'}></td>
                <td className={array.includes('621')? 'red': 'green'}></td>
            </tr>
            <tr>
                <td>Court 7</td>
                <td className={array.includes('708')? 'red': 'green'}></td>
                <td className={array.includes('709')? 'red': 'green'}></td>
                <td className={array.includes('710')? 'red': 'green'}></td>
                <td className={array.includes('711')? 'red': 'green'}></td>
                <td className={array.includes('712')? 'red': 'green'}></td>
                <td className={array.includes('713')? 'red': 'green'}></td>
                <td className={array.includes('714')? 'red': 'green'}></td>
                <td className={array.includes('715')? 'red': 'green'}></td>
                <td className={array.includes('716')? 'red': 'green'}></td>
                <td className={array.includes('717')? 'red': 'green'}></td>
                <td className={array.includes('718')? 'red': 'green'}></td>
                <td className={array.includes('719')? 'red': 'green'}></td>
                <td className={array.includes('720')? 'red': 'green'}></td>
                <td className={array.includes('721')? 'red': 'green'}></td>
            </tr>
            <tr>
                <td>Court 8</td>
                <td className={array.includes('808')? 'red': 'green'}></td>
                <td className={array.includes('809')? 'red': 'green'}></td>
                <td className={array.includes('810')? 'red': 'green'}></td>
                <td className={array.includes('811')? 'red': 'green'}></td>
                <td className={array.includes('812')? 'red': 'green'}></td>
                <td className={array.includes('813')? 'red': 'green'}></td>
                <td className={array.includes('814')? 'red': 'green'}></td>
                <td className={array.includes('815')? 'red': 'green'}></td>
                <td className={array.includes('816')? 'red': 'green'}></td>
                <td className={array.includes('817')? 'red': 'green'}></td>
                <td className={array.includes('818')? 'red': 'green'}></td>
                <td className={array.includes('819')? 'red': 'green'}></td>
                <td className={array.includes('820')? 'red': 'green'}></td>
                <td className={array.includes('821')? 'red': 'green'}></td>
            </tr>
            <tr>
                <td>Court 9</td>
                <td className={array.includes('908')? 'red': 'green'}></td>
                <td className={array.includes('909')? 'red': 'green'}></td>
                <td className={array.includes('910')? 'red': 'green'}></td>
                <td className={array.includes('911')? 'red': 'green'}></td>
                <td className={array.includes('912')? 'red': 'green'}></td>
                <td className={array.includes('913')? 'red': 'green'}></td>
                <td className={array.includes('914')? 'red': 'green'}></td>
                <td className={array.includes('915')? 'red': 'green'}></td>
                <td className={array.includes('916')? 'red': 'green'}></td>
                <td className={array.includes('917')? 'red': 'green'}></td>
                <td className={array.includes('918')? 'red': 'green'}></td>
                <td className={array.includes('919')? 'red': 'green'}></td>
                <td className={array.includes('920')? 'red': 'green'}></td>
                <td className={array.includes('921')? 'red': 'green'}></td>
            </tr>
            <tr>
                <td >Court 10</td>
                <td className={array.includes('1008')? 'red': 'green'}></td>
                <td className={array.includes('1009')? 'red': 'green'}></td>
                <td className={array.includes('1010')? 'red': 'green'}></td>
                <td className={array.includes('1011')? 'red': 'green'}></td>
                <td className={array.includes('1012')? 'red': 'green'}></td>
                <td className={array.includes('1013')? 'red': 'green'}></td>
                <td className={array.includes('1014')? 'red': 'green'}></td>
                <td className={array.includes('1015')? 'red': 'green'}></td>
                <td className={array.includes('1016')? 'red': 'green'}></td>
                <td className={array.includes('1017')? 'red': 'green'}></td>
                <td className={array.includes('1018')? 'red': 'green'}></td>
                <td className={array.includes('1019')? 'red': 'green'}></td>
                <td className={array.includes('1020')? 'red': 'green'}></td>
                <td className={array.includes('1021')? 'red': 'green'}></td>
            </tr>    
            </tbody>
            </table>
        </>
    }

}