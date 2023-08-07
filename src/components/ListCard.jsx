import React from 'react'
import CardProjet from './CardProjet'

function ListCard({ dataProjets }) {
    return (
        <>
            {dataProjets.map(({ id, title, pictures, description, outil, link }) =>

                <CardProjet
                    key={id}
                    id={id}
                    pictures={pictures}
                    title={title}
                    description={description}
                    outil={outil}
                    link={link}
                />

            )}
        </>
    )
}

export default ListCard


