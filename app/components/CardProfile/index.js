import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextInfo from 'components/TextInfo';
import { Row, Col, Card, Avatar } from 'antd';
import Button from 'components/Button';
import RunSummary from 'components/RunSummary';

class CardProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, id, distance, pace, runs } = this.props;
        return (
            <div>
                <Card>
                    <Row type="flex" gutter={16}>
                            <Avatar icon="user" shape="square" size="large" />                        
                            <div>
                                <h2>{name}</h2>
                                <TextInfo>{id}</TextInfo>
                            </div>
                    </Row>
                    <Row gutter={10}>
                        <Col xs={12}> <Button type="primary"  > Submit Run</Button></Col>
                        <Col xs={12}><Button > Logs </Button></Col>
                    </Row>


                </Card>
                <RunSummary distance={distance} pace={pace} runs={runs} />
            </div>
        )
    }
}

CardProfile.defaultProps = {
    name: 'Anthony Wong',
    id: '10132449',
    distance: 100,
    pace: '0-0',
    runs: 10
}

CardProfile.propTypes = {
    name: PropTypes.string,
    id: PropTypes.id,
    distance: PropTypes.number,
    pace: PropTypes.string,
    runs: PropTypes.number
};

export default CardProfile;
