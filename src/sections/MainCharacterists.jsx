import { useEffect, useState } from "react"

export const MainCharacterists = ({ caracteristicas }) => {

    const [charArray, setCharArray] = useState([])

    useEffect(() => {
        setCharArray(caracteristicas.attributes)
    }, [caracteristicas])
    
    return(
        <section>
            <h2>Características principales</h2>
            <table>
                <tbody>
                    {
                        (!charArray) ? null
                        : charArray.map(char => (
                            <tr key={ char.id }>
                                <th>{ char.name }</th>
                                <td>{ char.value_name }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}