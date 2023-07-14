import React,  {useContext} from 'react'
import TopBar from '../TopBar/TopBar'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Input from '../Form/Input'
import Button from '../Form/Button'
import AuthContext from '../../context/authContext'
import { requiredValidator, maxValidator, minValidator, emailValidator } from '../../Validators/rules'
import { useForm } from '../../hooks/useForm'
export default function Register() {
  const authContext = useContext(AuthContext)
  const registerNewUser = (event) => {
    const newUserInfo = {
      name:formState.inputs.name.value,
      username:formState.inputs.username.value,
      email:formState.inputs.email.value,
      password:formState.inputs.password.value,
      confirmPassword:formState.inputs.password.value,
      phone:9029974092,
    }
    fetch(`http://localhost:4000/v1/auth/register`, {
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(newUserInfo)
    })
    .then(res=>res.json())
    .then(result => {
      authContext.login(result.user ,result.accessToken)
    })
  }
  const [formState, onInputHandler] = useForm({
    name: {
      value: '',
      isValid: false
    },
    username: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    },
  }, false)
  return (
    <div>
      <TopBar></TopBar>
      <NavBar></NavBar>

      <div className='relative'>
        <div className='-z-50 absolute  w-full h-96 bg-primary-color [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]'>
        </div>
        <div className='-z-40 top-10 absolute w-full h-96 bg-primary-color/70 [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]'></div>
        <div className=' flex justify-center z-50'>
          <div className='flex flex-col mt-10 bg-white-color rounded-md p-3 border-b-4 border-b-primary-color shadow-lg gap-5 py-16'>
            <div className='font-bold text-xl text-center'><h1>ساخت حساب کاربری</h1></div>
            <div className='text-center mb-16'><h4>خوشحالیم قراره به جمع ما بپیوندی</h4></div>
            <div className='bg-gray-200 flex items-center justify-center text-xs py-2 rounded-md gap-2'>
              <h4 className=''>قبلا ثبت نام کرده اید؟</h4>
              <Link className='bg-gray-500 px-2 py-1 text-white-color rounded-md' to="/login">وارد شوید</Link>
            </div>
            <div className='border px-2 py-2 text-xs flex justify-between'>
              <Input
                className=' w-full outline-none'
                type='text'
                placeholder='نام و نام خانوادگی'
                element='input'
                id={'name'}
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20)
                ]}
              ></Input>
              <i className="text-gray-400 fa-regular fa-star"></i>
            </div>
            <div className='border px-2 py-2 text-xs flex justify-between'>
              <Input
                className=' w-full outline-none'
                type='text'
                placeholder='نام کاربری'
                element='input'
                id={'username'}
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20)
                ]}
              ></Input>
              <i className="text-gray-400 fa-regular fa-star"></i>
            </div>
            <div className='border px-2 py-2 text-xs flex justify-between'>
              <Input
                className=' w-full outline-none'
                type='text'
                placeholder='آدرس ایمیل'
                element='input'
                id={'email'}
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  emailValidator()
                ]}
              ></Input>
              <i className="text-gray-400 fa-regular fa-star"></i>
            </div>
            <div className='border px-2 py-2 text-xs flex justify-between'>
              <Input
                className=' w-full outline-none'
                type='password'
                placeholder='رمز عبور'
                element='input'
                id={'password'}
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20)
                ]}
              ></Input>
              <i className="text-gray-400 fa-regular fa-star"></i>
            </div>
            <div className={`flex items-center text-white p-2 ${formState.isFormValid ? 'bg-primary-color' : 'bg-red-800'}`}>
              <div className=''>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className='flex-1 text-center cursor-pointer'>
                <Button
                  onClick={registerNewUser}
                  className={''}
                  disabled={!formState.isFormValid}
                >عضویت</Button>
              </div>
            </div>
            <div className='text-xs flex flex-col gap-2'>
              <h4 className='font-bold'>سلام کاربر محترم</h4>
              <ul className='mr-7 list-disc leading-5'>
                <li>لطفا از مرورگر های مطمعن و به روز مانند گوگل کروم و فایر فاکس استفاده کنید</li>
                <li>ما هرگز اطلاعات محرمانه ی شما را از طریق ایمیل درخاست نمیکنیم</li>
                <li>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}
