export default function ColorPalette() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Color Palette</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Primary Color */}
        <div className="space-y-2">
          <div className="w-full h-24 bg-[#FF6B34] rounded-md"></div>
          <p className="text-sm font-medium">Primary</p>
          <p className="text-xs text-muted-foreground">#FF6B34</p>
        </div>

        {/* Secondary Color */}
        <div className="space-y-2">
          <div className="w-full h-24 bg-[#f53535] rounded-md"></div>
          <p className="text-sm font-medium">Secondary</p>
          <p className="text-xs text-muted-foreground">#f53535</p>
        </div>

        {/* Background Color */}
        <div className="space-y-2">
          <div className="w-full h-24 bg-[#ffffff] rounded-md border"></div>
          <p className="text-sm font-medium">Background</p>
          <p className="text-xs text-muted-foreground">#ffffff</p>
        </div>

        {/* Text Color */}
        <div className="space-y-2">
          <div className="w-full h-24 bg-[#11170d] rounded-md"></div>
          <p className="text-sm font-medium">Text</p>
          <p className="text-xs text-muted-foreground">#11170d</p>
        </div>

        {/* Muted Background */}
        <div className="space-y-2">
          <div className="w-full h-24 bg-[#f8f8f8] rounded-md"></div>
          <p className="text-sm font-medium">Muted Background</p>
          <p className="text-xs text-muted-foreground">#f8f8f8</p>
        </div>

        {/* Border Color */}
        <div className="space-y-2">
          <div className="w-full h-24 bg-[#e2e2e2] rounded-md"></div>
          <p className="text-sm font-medium">Border</p>
          <p className="text-xs text-muted-foreground">#e2e2e2</p>
        </div>

        {/* Disabled Color */}
        <div className="space-y-2">
          <div className="w-full h-24 bg-[#ececed] rounded-md"></div>
          <p className="text-sm font-medium">Disabled</p>
          <p className="text-xs text-muted-foreground">#ececed</p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Usage Examples</h3>
        <div className="space-y-4">
          <button className="px-4 py-2 bg-[#FF6B34] text-white rounded-md hover:bg-[#FF6B34]/90">Primary Button</button>
          <button className="px-4 py-2 bg-[#f53535] text-white rounded-md hover:bg-[#f53535]/90">
            Secondary Button
          </button>
          <div className="p-4 bg-[#f8f8f8] rounded-md">
            <p className="text-[#11170d]">This is a muted background with default text.</p>
          </div>
          <div className="p-4 border border-[#e2e2e2] rounded-md">
            <p>This box has a border.</p>
          </div>
          <button className="px-4 py-2 bg-[#ececed] text-[#adacb0] rounded-md cursor-not-allowed">
            Disabled Button
          </button>
        </div>
      </div>
    </div>
  )
}

