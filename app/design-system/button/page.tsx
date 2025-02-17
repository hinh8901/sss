import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Button Variants</h2>

      {/* Primary Buttons */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Primary (Orange) Buttons</h3>

          {/* Solid Primary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Solid</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" leftIcon rightIcon>
                Button
              </Button>
              <Button size="md" leftIcon rightIcon>
                Button
              </Button>
              <Button size="sm" leftIcon rightIcon>
                Button
              </Button>
              <Button size="xs" leftIcon rightIcon>
                Button
              </Button>
              <Button size="md" leftIcon rightIcon disabled>
                Button
              </Button>
            </div>
          </div>

          {/* Ghost Primary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Ghost</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary-ghost" size="lg" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-ghost" size="md" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-ghost" size="sm" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-ghost" size="xs" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-ghost" size="md" leftIcon rightIcon disabled>
                Button
              </Button>
            </div>
          </div>

          {/* Outline Primary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Outline</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary-outline" size="lg" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-outline" size="md" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-outline" size="sm" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-outline" size="xs" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-outline" size="md" leftIcon rightIcon disabled>
                Button
              </Button>
            </div>
          </div>

          {/* Text Primary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Text</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary-text" size="lg" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-text" size="md" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-text" size="sm" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-text" size="xs" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="primary-text" size="md" leftIcon rightIcon disabled>
                Button
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Secondary Buttons</h3>

          {/* Solid Secondary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Solid</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary" size="md" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary" size="sm" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary" size="xs" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary" size="md" leftIcon rightIcon disabled>
                Button
              </Button>
            </div>
          </div>

          {/* Ghost Secondary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Ghost</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary-ghost" size="lg" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-ghost" size="md" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-ghost" size="sm" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-ghost" size="xs" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-ghost" size="md" leftIcon rightIcon disabled>
                Button
              </Button>
            </div>
          </div>

          {/* Outline Secondary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Outline</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary-outline" size="lg" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-outline" size="md" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-outline" size="sm" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-outline" size="xs" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-outline" size="md" leftIcon rightIcon disabled>
                Button
              </Button>
            </div>
          </div>

          {/* Text Secondary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Text</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary-text" size="lg" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-text" size="md" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-text" size="sm" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-text" size="xs" leftIcon rightIcon>
                Button
              </Button>
              <Button variant="secondary-text" size="md" leftIcon rightIcon disabled>
                Button
              </Button>
            </div>
          </div>
        </div>

        {/* Example Usage */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Example Usage</h3>
          <div className="flex flex-wrap gap-4">
            <Button leftIcon>Create New</Button>
            <Button variant="secondary" rightIcon>
              Delete
            </Button>
            <Button variant="primary-outline" leftIcon rightIcon>
              Learn More
            </Button>
            <Button variant="secondary-ghost" leftIcon>
              Settings
            </Button>
            <Button variant="primary-text" rightIcon>
              View All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

