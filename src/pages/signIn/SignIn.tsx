import { memo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { shallowEqual, useDispatch } from 'react-redux'
import { getUserThunk } from '../../store/user/userSlice'
import { useSelector } from '../../hooks/useSelector'
import styles from './signIn.module.css'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const SignIn: React.FC = memo(() => {
  const loading = useSelector(s => s.userReducer.loading, shallowEqual)
  const jwt = useSelector(s => s.userReducer.token, shallowEqual)

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (jwt) {
      history.push('/')
    }
  }, [jwt])

  const onFinish = async (values: any) => {
    const { username, password } = values
    dispatch(getUserThunk({ email: username, password: password }))
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={styles['signin-container']}>
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

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button loading={loading} type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})

export default SignIn
