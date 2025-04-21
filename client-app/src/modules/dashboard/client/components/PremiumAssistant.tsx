import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Headphones, Calendar, MessageSquare, Phone } from "lucide-react"

export function PremiumAssistant() {
  return (
    <Card className="border-primary/20">
      <CardHeader className="p-3">
        <div className="flex items-center gap-2">
          <Headphones className="h-4 w-4 text-primary" />
          <CardTitle className="text-lg font-semibold">Tu Asistente Premium</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="flex flex-col items-center text-center space-y-3">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Ejecutivo Premium" />
            <AvatarFallback className="bg-primary/20 text-primary text-lg">AM</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">Ana Martínez</h3>
            <p className="text-xs text-muted-foreground">Ejecutiva de Cuentas Premium</p>
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mt-1">
              <Phone className="h-3 w-3" />
              <span>Lun-Vie 9AM-7PM</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 justify-center w-full">
            <Button className="button-primary-auto h-8 text-xs px-2">
              <MessageSquare className="h-3 w-3 mr-1" /> Chatear
            </Button>
            <Button variant="outline" className="button-outline-auto h-8 text-xs px-2">
              <Phone className="h-3 w-3 mr-1" /> Llamar
            </Button>
            <Button variant="outline" className="button-outline-auto h-8 text-xs px-2">
              <Calendar className="h-3 w-3 mr-1" /> Agendar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
