import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <Header className="Top">
                <h1>Catch
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    <h3 className="tagline">
                        <span>Fresh Seafood Market</span>
                    </h3>
                </h1>
            </Header>
        );
    }
}

export default Header;