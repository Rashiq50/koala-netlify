import React from "react";

export default function AvatarPlaceHolder({user=null,w}) {
    return (
        <div className="avatar placeholder">
            <div className={`bg-primary text-neutral-content font-semibold rounded-full ${w ? w : "w-28"}`}>
                {user &&
                    <span className='text-4xl'>
                        {`${user?.name?.split(' ')[0][0].toUpperCase()}${user?.name?.split(' ')[1][0].toUpperCase()}`}
                    </span>
                }
            </div>
        </div>
    )
}