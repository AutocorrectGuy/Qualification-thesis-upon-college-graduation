import React from 'react'
import Markdown from '../../components/markdown/Markdown'
import { task_2_description } from './assets/taskDescriptions'
import DefaultButton from '../../components/DefaultButton'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const Task_2 = () => {
  const [score, setScore] = useState(0)
  const [grid, setGrid] = useState<number[][]>([[]])
  const [gameStarted, setGameStarted] = useState(false)
  const [clickedTiles, setClickedTiles] = useState<boolean[]>([...Array(16).map((_x) => false)])

  useEffect(() => {
    const newGrid = [...Array(4)].map((_x, i) =>
      [...Array(4)].map((_y, j) => ((i + j) % 2) ? 0 : 1)
    )
    setGrid(newGrid)
    console.log(grid)
  }, [])


  return (
    <div className='flex flex-col-reverse lg:grid lg:grid-cols-2'>
      <Markdown textContent={task_2_description} />
      <div className='shadow-xl shadow-cyan-900'>
        <div className='flex justify-end text-white text-4xl py-4 w-full'>
          score:&nbsp;{score}
        </div>
        <div className='grid grid-cols-4 w-full aspect-square'>
          {
            grid.map((row, i) => {
              return row.map((isDark, j) => {
                return <div
                  key={`${i}-${j}`}
                  onClick={() => {
                    if (!gameStarted)
                      return

                    const cellNum = i * 4 + j
                    if (clickedTiles[cellNum])
                      return

                    setClickedTiles(prev => {
                      if (isDark) {
                        setScore((score) => score + 1)
                      } else {
                        setScore((score) => score - 1)
                        toast.error('Kļūda! -1 punkts', {
                          position: 'top-center',
                          autoClose: 1000
                        })
                      }
                      prev[cellNum] = true
                      return prev
                    })
                  }}
                  className={`${(isDark
                    ? clickedTiles[i * 4 + j]
                      ? 'bg-black' // when user finds one
                      : gameStarted
                        ? 'bg-white'
                        : 'bg-black' // before game started
                    : 'bg-white')}`}
                />
              })
            })
          }
        </div>
        <DefaultButton
          text={gameStarted ? 'Game started...' : 'Start'}
          className='mx-auto py-6 text-xl w-full mt-2'
          colorClassName={gameStarted ? 'bg-cyan-900' : 'bg-cyan-500 hover:bg-cyan-400'}
          onClick={() => {
            toast.info('Game started!', { position: 'top-center' })
            setGameStarted(true)
          }}
        />
      </div>
    </div>
  )
}

export default Task_2