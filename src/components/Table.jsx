import React, {useState} from 'react'
import './Table.css'


export const Table = () => {

    return (
        <div>
            <table>
                <tr>
                    <th>Университет</th>
                    <th>Количество студентов</th>
                    <th>Год основания</th>
                    <th>Адрес</th>
                </tr>
                <tr>
                    <td style={{borderTop: "none", borderBottom: "none"}}>ДГТУ</td>
                    <td style={{borderTop: "none", borderBottom: "none"}}>46000</td>
                    <td style={{borderTop: "none", borderBottom: "none"}}>1930</td>
                    <td style={{borderTop: "none", borderBottom: "none"}}>пл.Гагарина,1</td>
                </tr>
                <tr>
                    <td style={{borderTop: "none", borderBottom: "none"}}>ЮФУ</td>
                    <td style={{borderTop: "none", borderBottom: "none"}}>33125</td>
                    <td style={{borderTop: "none", borderBottom: "none"}}>2006</td>
                    <td style={{borderTop: "none", borderBottom: "none"}}>ул.Б.Садовая,105</td>
                </tr>
                <tr>
                    <td style={{borderTop: "none", borderBottom: "none"}}>РИНХ</td>
                    <td style={{borderTop: "none", borderBottom: "none"}}>21636</td>
                    <td style={{borderTop: "none", borderBottom: "none"}}>1931</td>
                    <td style={{borderTop: "none", borderBottom: "none"}}>ул.Б.Садовая,69</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th rowSpan={2}>Браузер</th>
                    <th colSpan={2}>Посещения</th>
                </tr>
                <tr>
                    <th>Количество</th>
                    <th>В процентах</th>
                </tr>
                <tr>
                    <td>Mozilla Firefox</td>
                    <td>163</td>
                    <td>59%</td>
                </tr>
                <tr>
                    <td>Google Chrome</td>
                    <td>78</td>
                    <td>28%</td>
                </tr>
                <tr>
                    <td>Safari</td>
                    <td>35</td>
                    <td>13%</td>
                </tr>
            </table>
            <table style={{borderLeft: "none", borderRight: "none"}}>
                <tr>
                    <th style={{border: "none"}}>Город</th>
                    <th style={{border: "none"}}>Посещения</th>
                    <th style={{border: "none"}}>Страниц</th>
                    <th style={{border: "none"}}>Время</th>
                </tr>
                <tr>
                    <td>СПб</td>
                    <td>199</td>
                    <td>18,02</td>
                    <td>00:13:45</td>
                </tr>
                <tr>
                    <td>Москва</td>
                    <td>69</td>
                    <td rowSpan={2}>нет данных</td>
                    <td>00:00:44</td>
                </tr>
                <tr>
                    <td>Киев</td>
                    <td>5</td>
                    <td>00:18:07</td>
                </tr>
                <tr>
                    <td colSpan={3}>Всего посещений</td>
                    <td>273</td>
                </tr>
            </table>
        </div>
    )
}