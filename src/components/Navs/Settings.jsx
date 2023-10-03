import React, { useState } from 'react'

const Settings = () => {
  const contents = [
    {
      title: 'Public Profile',
      content: publicProfile,
    },
    {
      title: 'Account Settings',
      content: accountSettings,
    },
    {
      title: 'Account Settings',
      content: notifications,
    },
  ]
  const [activeMenu, setActiveMenu] = useState(0)
  const ActiveContent = contents[activeMenu].content
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block bg-white">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      {/* <!-- Seperator --> */}
      <div className="shrink-0 bg-border h-[1px] w-full"></div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
          {contents.map((item, index) => (
            <a
              key={index}
              className={
                (index === activeMenu ? 'text-white bg-teal-700' : '') +
                ' inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-9 px-4 py-2 justify-start w-full border'
              }
              onClick={() => setActiveMenu(index)}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <ActiveContent />
      </div>
    </div>
  )
}

export default Settings

const publicProfile = () => {
  return <div className=""> publicProfile</div>
}
const accountSettings = () => {
  return <div className="">accountSettings</div>
}
const notifications = () => {
  return <div className="">notifications</div>
}
