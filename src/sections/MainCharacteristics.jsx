import { useEffect, useState } from "react"
import '../styles/MainCharacteristics.css'

export const MainCharacteristics = ({ caracteristicas }) => {

    const [charArray, setCharArray] = useState([])

    useEffect(() => {
        setCharArray(caracteristicas.attributes)
    }, [caracteristicas])
    
    return(
        <section className="characteristics-section">
            <h2>Características principales</h2>
            <table>
                <tbody>
                    {
                        (!charArray) ? null
                        : charArray.map((char, index) => (
                            <tr key={ char.id }>
                                <th className={(index % 2 === 0) ? 'negro1' : 'negro2'}>{ char.name }</th>
                                {/* Si utilizo abajo: && 'negro-punto05 me arroja un warning y me pide que use ? y : */}
                                <td className={(index % 2 === 0) ? 'negro2' : null}>{ char.value_name }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}