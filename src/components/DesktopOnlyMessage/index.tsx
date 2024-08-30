
function DesktopOnlyMessage() {
    return (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">This page is only available in desktop mode</h1>
            <p>Please resize your browser window or switch to a device with a larger screen to view this content.</p>
          </div>
        </div>
      )
}

export default DesktopOnlyMessage