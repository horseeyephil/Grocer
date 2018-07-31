import React, { Component } from 'react';

export default function ExpandingList(props) {
  return(
    <div>
      {
        props.list.map((item,index) => {
          return(
            <span className="listItem" key={index}>
              <input onChange={(e) => {props.onChange(index,e)}} value={item}></input>
              {
                index != props.list.length - 1 &&
                <div onClick={() => props.onRemoveClick(index)}>X</div>
              }
            </span>
          )
        })
      }
    </div>
  )
}