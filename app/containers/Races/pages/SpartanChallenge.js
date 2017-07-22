import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Button } from 'antd'
import FormJoinRace from 'components/FormJoinRace';

class SpartanChallenge extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} sm={18}>
                        <Card title="Spartan Challenge">
                            <Button type="primary" style={{width:"100%"}}>Join Race</Button>
                            <div>
                                Countdown goes here
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cum excepturi, deleniti
                                at maiores incidunt similique in sunt quo et. Maxime quo rem, laborum fuga aliquam in excepturi ipsa sit.
                             </div>
                        </Card>

                        <FormJoinRace />
                    </Col>
                </Row>
            </div>
        );
    }
}

SpartanChallenge.propTypes = {

};

export default SpartanChallenge;