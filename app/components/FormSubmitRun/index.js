import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message, Form, Input, InputNumber, Button, Checkbox, Row, Col } from 'antd';
import FormWrapper from 'components/FormWrapper';
import FormItem from 'components/FormItem';
import UploadPhoto from 'components/UploadPhoto';

class FormSubmitRun extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form 2: ', values);
                if (this.props.onSubmit) {
                    this.props.onSubmit(values);
                }
            }
        });
    }

    handleUploadPhoto = () => {

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const imageUrl = "";
        return (
            <Form onSubmit={this.handleSubmit} >
                <FormWrapper bordered>
                    <Row>
                        <Col xs={8}>
                            <FormItem label="Upload Photo">
                                {getFieldDecorator('photo')
                                    (<UploadPhoto />)}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8}>
                            <FormItem label="Distance (km)">
                                {getFieldDecorator('distance', {
                                    rules: [{ required: true, message: 'Please input distance' }],
                                })
                                    (< InputNumber min={0} placeholder="Distance" />)}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={5}>
                        <Col xs={8}>                           
                            <FormItem label="Hour">
                                {getFieldDecorator('hour')
                                (<InputNumber min={0} placeholder="Hour" />)}
                            </FormItem>
                        </Col>
                        <Col xs={8}>                            
                            <FormItem label="Minutes">
                                {getFieldDecorator('minutes')
                                (<InputNumber min={0} max={59} placeholder="Minutes" />)}
                            </FormItem>
                        </Col>
                        <Col xs={8}>                            
                            <FormItem label="Seconds">
                                {getFieldDecorator('seconds')
                                (<InputNumber min={0} max={59} placeholder="Minutes" />)}
                            </FormItem>
                        </Col>
                    </Row>

                    <Row gutter={5}>
                        <Col xs={24}>
                            <FormItem label="Notes">
                                {getFieldDecorator('notes') 
                                (<Input.TextArea rows={4} placeholder="Notes" />)}
                            </FormItem>
                        </Col>
                    </Row>

                    <br />
                    
                    <Button type="primary" htmlType="submit">
                        Submit Journal
                    </Button>                    
                </FormWrapper>
            </Form>
        )
    }
}

FormSubmitRun.propTypes = {
    onSubmit:PropTypes.func
}

export default Form.create()(FormSubmitRun);