function HeaderIcon( { Icon, active }) {
    return (
        // shrink in height on smaller screens
        <div className = 'flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group'>
            <Icon className={`h-5 text-center text-gray-500 group-hover:text-blue-500 sm:h-7 mx-auto ${active && 'text-blue-500'}`}/>
        </div>
    )
}

export default HeaderIcon
