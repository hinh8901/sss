import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function ButtonGroupDemo() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Button Group Variants</h2>

      <div className="space-y-8">
        {/* Primary Button Groups */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Primary (Orange) Button Groups</h3>

          {/* Solid Primary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Solid</p>
            <div className="flex flex-col gap-4">
              <ButtonGroup>
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup disabled>
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
            </div>
          </div>

          {/* Ghost Primary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Ghost</p>
            <div className="flex flex-col gap-4">
              <ButtonGroup variant="primary-ghost">
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup variant="primary-ghost" disabled>
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
            </div>
          </div>

          {/* Outline Primary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Outline</p>
            <div className="flex flex-col gap-4">
              <ButtonGroup variant="primary-outline">
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup variant="primary-outline" disabled>
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>

        {/* Secondary Button Groups */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Secondary Button Groups</h3>

          {/* Solid Secondary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Solid</p>
            <div className="flex flex-col gap-4">
              <ButtonGroup variant="secondary">
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup variant="secondary" disabled>
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
            </div>
          </div>

          {/* Ghost Secondary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Ghost</p>
            <div className="flex flex-col gap-4">
              <ButtonGroup variant="secondary-ghost">
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup variant="secondary-ghost" disabled>
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
            </div>
          </div>

          {/* Outline Secondary */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Outline</p>
            <div className="flex flex-col gap-4">
              <ButtonGroup variant="secondary-outline">
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
              <ButtonGroup variant="secondary-outline" disabled>
                <Button leftIcon rightIcon>
                  Button
                </Button>
                <Button leftIcon rightIcon>
                  Button
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Size Variants</h3>
          <div className="flex flex-col gap-4">
            <ButtonGroup size="lg">
              <Button leftIcon rightIcon>
                Button
              </Button>
              <Button leftIcon rightIcon>
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup size="md">
              <Button leftIcon rightIcon>
                Button
              </Button>
              <Button leftIcon rightIcon>
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup size="sm">
              <Button leftIcon rightIcon>
                Button
              </Button>
              <Button leftIcon rightIcon>
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup size="xs">
              <Button leftIcon rightIcon>
                Button
              </Button>
              <Button leftIcon rightIcon>
                Button
              </Button>
            </ButtonGroup>
          </div>
        </div>

        {/* Example Usage */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Example Usage</h3>
          <div className="flex flex-col gap-4">
            <ButtonGroup variant="primary" fullWidth>
              <Button className="flex-1" leftIcon>
                Previous
              </Button>
              <Button className="flex-1" rightIcon>
                Next
              </Button>
            </ButtonGroup>

            <ButtonGroup variant="secondary-outline">
              <Button leftIcon>Copy</Button>
              <Button rightIcon>Share</Button>
            </ButtonGroup>

            <ButtonGroup variant="primary-ghost">
              <Button leftIcon>Save</Button>
              <Button rightIcon>Export</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

