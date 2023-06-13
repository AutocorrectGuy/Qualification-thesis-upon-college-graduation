
import { useState, useEffect } from 'react'
import axiosInstance from '../../services/axios/axiosConfig'
import Markdown from '../../components/markdown/Markdown'
import { useParams, useNavigate } from 'react-router-dom'
import { PresentationType } from '../../routes/presentations/PresentationsAPIHandlers'
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const SinglePresentation = () => {
    const { name } = useParams()
    const navigate = useNavigate()
    const [markdownText, setMarkdownText] = useState<PresentationType | undefined>(undefined)

    useEffect(() => {
        if (typeof name !== 'string')
            return
            
        axiosInstance.get(`/presentations/${encodeURIComponent(name)}`)
            .then(res => {
                if (!res) {
                    navigate('/404')
                    return
                }
                setMarkdownText({ name: res.data.name, textContent: res.data.textContent })
            })
            .catch(() => navigate('/404'))
    }, [])
    return (
        markdownText ? <div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold py-4 text-white'>{markdownText.name}</h1>
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    className='w-12 h-12 text-purple-300 hover:text-purple-100 cursor-pointer'
                    onClick={() => navigate(-1)}
                />
            </div>
            <Markdown textContent={markdownText.textContent} />
        </div> : <Skeleton className='min-h-screen' />
    )
}

export default SinglePresentation