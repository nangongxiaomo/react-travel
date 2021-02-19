import { memo } from 'react'

const SignIn: React.FC = memo(() => {
  console.log('children render')
  return <div>登录页面</div>
})

export default SignIn
