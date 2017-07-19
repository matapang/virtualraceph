import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message, Form, Input, InputNumber, Button, Checkbox, Row, Col } from 'antd';
import FormItem from 'components/FormItem';
import UploadPhoto from 'components/UploadPhoto';
import AppLink from 'components/AppLink'

const FormWrapper = styled(Form) `
    .ant-row:nth-of-type(even) {
        background:#f5f5f5;
    }
`;

class FormSubmitRun extends Component {

    handleSubmit = () => {
        console.log("handles")
    }

    handleUploadPhoto = () => {

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const imageUrl = "";
        return (
            <FormWrapper onSubmit={this.handleSubmit} >
                <Row>
                    <Col xs={8}>
                        <FormItem label="Upload Photo">
                            <UploadPhoto />
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <FormItem label="Distance (km)">
                            <InputNumber min={0} placeholder="Distance" />
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={5}>
                    <Col xs={8}>
                        <FormItem label="Hour">
                            <InputNumber min={0} placeholder="Hour" />
                        </FormItem>
                    </Col>
                    <Col xs={8}>
                        <FormItem label="Minutes">
                            <InputNumber min={0} max={59} placeholder="Minutes" />
                        </FormItem>
                    </Col>
                    <Col xs={8}>
                        <FormItem label="Seconds">
                            <InputNumber min={0} max={59} placeholder="Seconds" />
                        </FormItem>
                    </Col>
                </Row>

                <Row gutter={5}>
                    <Col xs={24}>
                        <FormItem label="Notes">
                            <Input.TextArea rows={4} placeholder="Notes" />
                        </FormItem>
                    </Col>
                </Row>

                <AppLink to="/feeds">
                    <Button type="primary" htmlType="submit">
                        Submit Journal
                    </Button>
                </AppLink>
            </FormWrapper>
        )
    }
}

FormSubmitRun.propTypes = {

}

export default Form.create()(FormSubmitRun);