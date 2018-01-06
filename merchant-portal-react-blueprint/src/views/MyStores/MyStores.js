import React, { Component } from 'react';
import { Card, Grid, List, Image } from 'semantic-ui-react';

class MyStores extends Component {
    render() {
        return (
            <Card.Group itemsPerRow={2}>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Brunswick Store
                        </Card.Header>
                        <Card.Description>
                            <Grid celled>
                                <Grid.Row>
                                    <Grid.Column width={7}>
                                        <Image src='http://koncha.890m.com/wp-content/uploads/2016/06/3-600x600.jpg'/>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <List>
                                            <List.Item icon='id badge' content='Name' />
                                            <List.Item icon='address card' content='Address' />
                                            <List.Item icon='shopping bag' content='Restaurant' />
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Brunswick Store
                        </Card.Header>
                        <Card.Description>
                            <Grid celled>
                                <Grid.Row>
                                    <Grid.Column width={7}>
                                        <Image src='http://koncha.890m.com/wp-content/uploads/2016/06/3-600x600.jpg'/>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <List>
                                            <List.Item icon='id badge' content='Name' />
                                            <List.Item icon='address card' content='Address' />
                                            <List.Item icon='shopping bag' content='Restaurant' />
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Brunswick Store
                        </Card.Header>
                        <Card.Description>
                            <Grid celled>
                                <Grid.Row>
                                    <Grid.Column width={7}>
                                        <Image src='http://koncha.890m.com/wp-content/uploads/2016/06/3-600x600.jpg'/>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <List>
                                            <List.Item icon='id badge' content='Name' />
                                            <List.Item icon='address card' content='Address' />
                                            <List.Item icon='shopping bag' content='Restaurant' />
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Brunswick Store
                        </Card.Header>
                        <Card.Description>
                            <Grid celled>
                                <Grid.Row>
                                    <Grid.Column width={7}>
                                        <Image src='http://koncha.890m.com/wp-content/uploads/2016/06/3-600x600.jpg'/>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <List>
                                            <List.Item icon='id badge' content='Name' />
                                            <List.Item icon='address card' content='Address' />
                                            <List.Item icon='shopping bag' content='Restaurant' />
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Brunswick Store
                        </Card.Header>
                        <Card.Description>
                            <Grid celled>
                                <Grid.Row>
                                    <Grid.Column width={7}>
                                        <Image src='http://koncha.890m.com/wp-content/uploads/2016/06/3-600x600.jpg'/>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <List>
                                            <List.Item icon='id badge' content='Name' />
                                            <List.Item icon='address card' content='Address' />
                                            <List.Item icon='shopping bag' content='Restaurant' />
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        );
    }
}

export default MyStores;

