import React from 'react'

export default function PageFrame({page}){
  return (
    <iframe src={page} title={page} style={{width:'100%',height:'100%',border:0}} sandbox="allow-same-origin allow-scripts allow-forms allow-popups"/>
  )
}
