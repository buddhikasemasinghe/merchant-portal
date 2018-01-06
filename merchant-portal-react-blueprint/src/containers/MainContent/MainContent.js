import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Grid, Item, Header } from 'semantic-ui-react';
import MyStores from "../../views/MyStores/MyStores";

class MainContent extends Component {
    state = {visible: true, activeItem: 'dashboard'}

    toggleVisibility = () => this.setState({visible: !this.state.visible});
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {visible, activeItem} = this.state;
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='push' visible={visible} icon='labeled' color='blue' vertical inverted>
                        <Item.Group divided>
                            <Item>
                                <Item.Image className='side-bar-image'
                                            src='https://s3-ap-southeast-2.amazonaws.com/buyiteer-static-media/images/Buyiteer-main-screen-logo.png'/>
                            </Item>
                            <Item>
                                <Item.Image className='side-bar-image'
                                            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'/>
                            </Item>

                            <Item>
                                <Item.Header as='a' content='Hello Greg.. this is the skelton'/>
                            </Item>
                        </Item.Group>

                        <Menu secondary vertical fluid size='massive'>
                            <Menu.Item name='Dashboard' active={activeItem === 'dashboard'}
                                       className='side-bar-menu-item'
                                       onClick={this.handleItemClick}/>
                            <Menu.Item name='Profile' active={activeItem === 'profile'} className='side-bar-menu-item'
                                       onClick={this.handleItemClick}/>
                            <Menu.Item name='My Stores' active={activeItem === 'my-stores'}
                                       className='side-bar-menu-item'
                                       onClick={this.handleItemClick}/>
                            <Menu.Item name='My deal campaign' active={activeItem === 'my-deal-campaign'}
                                       className='side-bar-menu-item'
                                       onClick={this.handleItemClick}/>
                            <Menu.Item name='Billing and payments' active={activeItem === 'billing-and-payment'}
                                       className='side-bar-menu-item'
                                       onClick={this.handleItemClick}/>
                            <Menu.Item name='Log out' active={activeItem === 'log-out'} className='side-bar-menu-item'
                                       onClick={this.handleItemClick}/>
                        </Menu>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment className='main-content-header'>
                            <Grid>
                                <Grid.Column width={2}>
                                <i className="sidebar icon" onClick={this.toggleVisibility}></i>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                <h2>My Stores</h2>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                        <Segment basic className='main-content-body'>
                            <Grid>
                                <Grid.Column width={13}>
                                    <Header as='h3'>Dynamic application Content</Header>
                                    <MyStores/>
                                </Grid.Column>
                                <Grid.Column width={1}>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

MainContent.propTypes = {};

export default MainContent;
