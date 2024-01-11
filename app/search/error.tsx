'use client' // Error components must be Client Components
 
import { Button } from '@/components/ui/button'
import OtherLargeCities from '@/components/widgets/OtherLargeCities'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error.message)
  }, [error])
 
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>  
        <Link href={"/"}>
        <Button variant="outline" size="lg">
        <p className="text-sm text-muted-foreground">
        Error : Go Back to Home
          </p>
        </Button>
        </Link>
    </div>
  )
}