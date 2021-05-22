import React, {Fragment} from 'react';

const Header = ({titulo}) => {
    return ( 
        <Fragment>
            <nav>
                <div className="nav-wrapper orange darken-1">
                    <a href='#!' className="brand-logo">{titulo}</a>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default Header;