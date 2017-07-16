import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextInfo from 'components/TextInfo';
import { Row, Col, Card, Avatar } from 'antd';


const CardImage = styled.div`
 img {
     display: block;
     height:200px;
 }
`;
class CardRaces extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <Row gutter={8}>                
                {data.map((race, key) => 
                    <Col key={key} md={12} style={{marginBottom:5}}>
                        <Card>
                            <CardImage>
                                <img alt="example" width="100%" src={race.url} />
                            </CardImage>
                            <div className="custom-card">
                                <h3>{race.title}</h3>
                                <TextInfo>{race.description}</TextInfo>
                            </div>

                        </Card>
                    </Col>
                )}

            </Row>
        )
    }
}

CardRaces.defaultProps = {
    data: [
        { title: 'Event 1', date: '2017-Aug-12', description: 'Spartan Challenge', url:'https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/4-web-banner-2000-900-001-jpeg-zyf19062017-124730' },
        { title: 'Event 1', date: '2017-Aug-12', description: 'Spartan Challenge', url:'https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/4-web-banner-2000-900-001-jpeg-fdd11072017-95055' },
        { title: 'Event 1', date: '2017-Aug-12', description: 'Spartan Challenge', url:'https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/4-web-banner-2000-900-001-jpeg-zyf19062017-124730' },
        { title: 'Event 1', date: '2017-Aug-12', description: 'Spartan Challenge', url:'https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/4-web-banner-2000-900-001-jpeg-fdd11072017-95055' },
        { title: 'Event 1', date: '2017-Aug-12', description: 'Spartan Challenge', url:'https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/4-web-banner-2000-900-001-jpeg-zyf19062017-124730' },
        { title: 'Event 1', date: '2017-Aug-12', description: 'Spartan Challenge', url:'https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/4-web-banner-2000-900-001-jpeg-fdd11072017-95055' },

    ]
};

CardRaces.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.date,
        description: PropTypes.string,
        url:PropTypes.string

    }))
};

export default CardRaces;
