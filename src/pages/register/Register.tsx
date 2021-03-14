import { Form, Input, Button, Checkbox, message } from 'antd'
import { useHistory } from 'react-router-dom'
import styles from './register.module.css'
import { getRegister } from '../../http/api'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Register: React.FC = () => {
  const history = useHistory()
  const onFinish = async (values: any) => {
    const { username, password, comfirm } = values
    try {
      await getRegister({
        email: username,
        password: password,
        confirmPassword: comfirm
      })
      history.push('/signIn')
    } catch (error) {
      message.error('注册失败')
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles['register-container']}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Comfirm Password"
          name="comfirm"
          hasFeedback
          rules={[
            { required: true, message: 'Please input your comfirm password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject('密码不一致')
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
