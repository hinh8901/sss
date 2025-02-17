import { Display, H1, H2, H3, H4, H5, H6, Text } from "@/components/ui/typography"

export default function TypographyPage() {
  return (
    <div className="container mx-auto p-8 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">Typography</h2>

        {/* Display Text */}
        <div className="space-y-8">
          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              Display - 70px
            </Text>
            <Display>The quick brown fox jumps over the lazy dog</Display>
          </div>

          {/* Headings */}
          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              H1 - 60px
            </Text>
            <H1>The quick brown fox jumps over the lazy dog</H1>
          </div>

          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              H2 - 48px
            </Text>
            <H2>The quick brown fox jumps over the lazy dog</H2>
          </div>

          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              H3 - 32px
            </Text>
            <H3>The quick brown fox jumps over the lazy dog</H3>
          </div>

          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              H4 - 32px
            </Text>
            <H4>The quick brown fox jumps over the lazy dog</H4>
          </div>

          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              H5 - 24px
            </Text>
            <H5>The quick brown fox jumps over the lazy dog</H5>
          </div>

          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              H6 - 20px
            </Text>
            <H6>The quick brown fox jumps over the lazy dog</H6>
          </div>

          {/* Paragraphs */}
          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              Large Paragraph - 16px
            </Text>
            <Text variant="large">The quick brown fox jumps over the lazy dog</Text>
          </div>

          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              Regular Paragraph - 14px
            </Text>
            <Text variant="regular">The quick brown fox jumps over the lazy dog</Text>
          </div>

          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              Small Paragraph - 12px
            </Text>
            <Text variant="small">The quick brown fox jumps over the lazy dog</Text>
          </div>

          <div className="space-y-2">
            <Text variant="small" className="text-muted-foreground">
              Tiny Paragraph - 10px
            </Text>
            <Text variant="tiny">The quick brown fox jumps over the lazy dog</Text>
          </div>
        </div>

        {/* Font Weights */}
        <div className="mt-12 space-y-8">
          <h3 className="text-xl font-semibold mb-4">Font Weights</h3>

          <div className="space-y-4">
            <Text weight="extralight">Extra Light (200) - The quick brown fox jumps over the lazy dog</Text>
            <Text weight="light">Light (300) - The quick brown fox jumps over the lazy dog</Text>
            <Text weight="regular">Regular (400) - The quick brown fox jumps over the lazy dog</Text>
            <Text weight="medium">Medium (500) - The quick brown fox jumps over the lazy dog</Text>
            <Text weight="semibold">Semibold (700) - The quick brown fox jumps over the lazy dog</Text>
            <Text weight="extrabold">Extrabold (800) - The quick brown fox jumps over the lazy dog</Text>
            <Text weight="black">Black (900) - The quick brown fox jumps over the lazy dog</Text>
          </div>
        </div>
      </section>
    </div>
  )
}

