import React from 'react';
import AppBar from 'material-ui/AppBar';

export interface HeaderProps {

}

class Header extends React.Component {

  render() {
    const {styles} = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    return (
      <div>
        <AppBar
          style={{...styles, ...style.appBar}}
          title={''}
        />
      </div>
    );
  }
}

export default Header;