import {Puff} from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Puff color="#00BFFF" height={80} width={80} />
    </div>
  )
}
