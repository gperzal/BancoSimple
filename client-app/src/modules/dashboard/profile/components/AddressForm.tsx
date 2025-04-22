"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, Home, MapPin, Trash, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useAddress } from "../hooks/useAddress"
import type { Address } from "../types/ProfileTypes"

interface AddressFormProps {
  addresses: Address[]
}

export function AddressForm({ addresses: initialAddresses }: AddressFormProps) {
  const {
    addresses,
    isEditing,
    isAddingNew,
    isLoading,
    setIsEditing,
    setIsAddingNew,
    handleAddressChange,
    saveAddress,
    addAddress,
    deleteAddress,
    setAddressAsPrimary,
  } = useAddress(initialAddresses)

  const [newAddress, setNewAddress] = useState<Omit<Address, "id" | "activa">>({
    tipo_direccion: "residencial",
    calle: "",
    numero: "",
    comuna: "",
    ciudad: "",
    region: "",
    codigo_postal: "",
    pais: "Chile",
  })

  const handleNewAddressChange = (field: string, value: string) => {
    setNewAddress((prev) => ({ ...prev, [field]: value }))
  }

  const handleAddNewAddress = async () => {
    await addAddress(newAddress)
    setNewAddress({
      tipo_direccion: "residencial",
      calle: "",
      numero: "",
      comuna: "",
      ciudad: "",
      region: "",
      codigo_postal: "",
      pais: "Chile",
    })
  }

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <Card key={address.id} className="border-primary/20 overflow-hidden">
          <CardHeader className="bg-secondary/20 pb-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Home className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">
                  {address.tipo_direccion.charAt(0).toUpperCase() + address.tipo_direccion.slice(1)}
                </CardTitle>
                {address.activa && (
                  <Badge className="ml-2 bg-primary text-white">
                    <Star className="h-3 w-3 mr-1 fill-current" /> Principal
                  </Badge>
                )}
              </div>
              {!isEditing || isEditing !== address.id ? (
                <div className="flex space-x-2">
                  {!address.activa && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="button-outline-auto"
                      onClick={() => setAddressAsPrimary(address.id)}
                      disabled={isLoading}
                    >
                      <Star className="h-4 w-4 mr-1" /> Principal
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="button-ghost-auto"
                    onClick={() => setIsEditing(address.id)}
                    disabled={isLoading}
                  >
                    Editar
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive/90"
                        disabled={isLoading}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="popover">
                      <DialogHeader>
                        <DialogTitle>¿Eliminar dirección?</DialogTitle>
                        <DialogDescription>
                          Esta acción no se puede deshacer. ¿Estás seguro que deseas eliminar esta dirección?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline" className="button-outline-auto" onClick={() => {}}>
                          Cancelar
                        </Button>
                        <Button
                          variant="destructive"
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          onClick={() => deleteAddress(address.id)}
                          disabled={isLoading}
                        >
                          {isLoading ? "Eliminando..." : "Eliminar"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              ) : null}
            </div>
          </CardHeader>

          <CardContent className="pt-4">
            {isEditing === address.id ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`tipo_${address.id}`}>Tipo de dirección</Label>
                    <Select
                      value={address.tipo_direccion}
                      onValueChange={(value) => handleAddressChange(address.id, "tipo_direccion", value)}
                      disabled={isLoading}
                    >
                      <SelectTrigger id={`tipo_${address.id}`} className="select-primary">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent className="popover">
                        <SelectItem value="residencial">Residencial</SelectItem>
                        <SelectItem value="trabajo">Trabajo</SelectItem>
                        <SelectItem value="otra">Otra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`pais_${address.id}`}>País</Label>
                    <Select
                      value={address.pais}
                      onValueChange={(value) => handleAddressChange(address.id, "pais", value)}
                      disabled={isLoading}
                    >
                      <SelectTrigger id={`pais_${address.id}`} className="select-primary">
                        <SelectValue placeholder="Seleccionar país" />
                      </SelectTrigger>
                      <SelectContent className="popover">
                        <SelectItem value="Chile">Chile</SelectItem>
                        <SelectItem value="Argentina">Argentina</SelectItem>
                        <SelectItem value="Perú">Perú</SelectItem>
                        <SelectItem value="Bolivia">Bolivia</SelectItem>
                        <SelectItem value="Colombia">Colombia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor={`calle_${address.id}`}>Calle</Label>
                    <Input
                      id={`calle_${address.id}`}
                      value={address.calle}
                      onChange={(e) => handleAddressChange(address.id, "calle", e.target.value)}
                      className="input-primary"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`numero_${address.id}`}>Número</Label>
                    <Input
                      id={`numero_${address.id}`}
                      value={address.numero}
                      onChange={(e) => handleAddressChange(address.id, "numero", e.target.value)}
                      className="input-primary"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`comuna_${address.id}`}>Comuna</Label>
                    <Input
                      id={`comuna_${address.id}`}
                      value={address.comuna}
                      onChange={(e) => handleAddressChange(address.id, "comuna", e.target.value)}
                      className="input-primary"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`ciudad_${address.id}`}>Ciudad</Label>
                    <Input
                      id={`ciudad_${address.id}`}
                      value={address.ciudad}
                      onChange={(e) => handleAddressChange(address.id, "ciudad", e.target.value)}
                      className="input-primary"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`region_${address.id}`}>Región</Label>
                    <Input
                      id={`region_${address.id}`}
                      value={address.region}
                      onChange={(e) => handleAddressChange(address.id, "region", e.target.value)}
                      className="input-primary"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`codigo_postal_${address.id}`}>Código postal</Label>
                    <Input
                      id={`codigo_postal_${address.id}`}
                      value={address.codigo_postal}
                      onChange={(e) => handleAddressChange(address.id, "codigo_postal", e.target.value)}
                      className="input-primary"
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p>
                      {address.calle} {address.numero}
                    </p>
                    <p className="text-muted-foreground">
                      {address.comuna}, {address.ciudad}
                    </p>
                    <p className="text-muted-foreground">
                      {address.region}, {address.pais} {address.codigo_postal}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          {isEditing === address.id && (
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setIsEditing(null)}
                className="button-outline-auto"
                disabled={isLoading}
              >
                Cancelar
              </Button>
              <Button onClick={() => saveAddress} className="button-primary-auto" disabled={isLoading}>
                {isLoading ? "Guardando..." : "Guardar cambios"}
              </Button>
            </CardFooter>
          )}
        </Card>
      ))}

      {isAddingNew ? (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <PlusCircle className="h-5 w-5 mr-2 text-primary" />
              Agregar nueva dirección
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new_tipo">Tipo de dirección</Label>
                <Select
                  value={newAddress.tipo_direccion}
                  onValueChange={(value) => handleNewAddressChange("tipo_direccion", value)}
                  disabled={isLoading}
                >
                  <SelectTrigger id="new_tipo" className="select-primary">
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent className="popover">
                    <SelectItem value="residencial">Residencial</SelectItem>
                    <SelectItem value="trabajo">Trabajo</SelectItem>
                    <SelectItem value="otra">Otra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="new_pais">País</Label>
                <Select
                  value={newAddress.pais}
                  onValueChange={(value) => handleNewAddressChange("pais", value)}
                  disabled={isLoading}
                >
                  <SelectTrigger id="new_pais" className="select-primary">
                    <SelectValue placeholder="Seleccionar país" />
                  </SelectTrigger>
                  <SelectContent className="popover">
                    <SelectItem value="Chile">Chile</SelectItem>
                    <SelectItem value="Argentina">Argentina</SelectItem>
                    <SelectItem value="Perú">Perú</SelectItem>
                    <SelectItem value="Bolivia">Bolivia</SelectItem>
                    <SelectItem value="Colombia">Colombia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="new_calle">Calle*</Label>
                <Input
                  id="new_calle"
                  value={newAddress.calle}
                  onChange={(e) => handleNewAddressChange("calle", e.target.value)}
                  className="input-primary"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new_numero">Número*</Label>
                <Input
                  id="new_numero"
                  value={newAddress.numero}
                  onChange={(e) => handleNewAddressChange("numero", e.target.value)}
                  className="input-primary"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new_comuna">Comuna*</Label>
                <Input
                  id="new_comuna"
                  value={newAddress.comuna}
                  onChange={(e) => handleNewAddressChange("comuna", e.target.value)}
                  className="input-primary"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new_ciudad">Ciudad*</Label>
                <Input
                  id="new_ciudad"
                  value={newAddress.ciudad}
                  onChange={(e) => handleNewAddressChange("ciudad", e.target.value)}
                  className="input-primary"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new_region">Región</Label>
                <Input
                  id="new_region"
                  value={newAddress.region}
                  onChange={(e) => handleNewAddressChange("region", e.target.value)}
                  className="input-primary"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new_codigo_postal">Código postal</Label>
                <Input
                  id="new_codigo_postal"
                  value={newAddress.codigo_postal}
                  onChange={(e) => handleNewAddressChange("codigo_postal", e.target.value)}
                  className="input-primary"
                  disabled={isLoading}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setIsAddingNew(false)}
              className="button-outline-auto"
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button onClick={handleAddNewAddress} className="button-primary-auto" disabled={isLoading}>
              {isLoading ? "Guardando..." : "Guardar dirección"}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Button
          variant="outline"
          className="w-full button-outline-auto"
          onClick={() => setIsAddingNew(true)}
          disabled={isLoading}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Agregar nueva dirección
        </Button>
      )}
    </div>
  )
}
