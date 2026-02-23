import React from 'react'

export default function Alert(Props) {
  return (
    <div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        {Props.alert}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
