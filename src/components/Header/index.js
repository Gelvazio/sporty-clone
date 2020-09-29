import React from 'react'
import './Header.css'

import { useDataLayerValue } from '../../Config/DataLayer'

import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from "@material-ui/core"

function Header() {
    const [{ user }, ] = useDataLayerValue()
    // const [seed, setSeed] = useState(0)

    // useEffect(() => {
    //     setSeed(Math.floor(Math.random() * 5000))
    // }, [])

    return (
        <div className="header" >
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Pesquise por artistas, músicas ou podcasts "
                    type="text"
                />
            </div>

            <div className="header__right">
                <Avatar
                    // src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                    src={user?.images[0]?.url}
                    alt={user?.display_name}
                />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
