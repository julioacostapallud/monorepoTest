import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@ApiTags('products')
@Controller('api/products')
export class ProductsController {
  
  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de productos obtenida exitosamente',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          name: { type: 'string', example: 'Laptop Gaming' },
          description: { type: 'string', example: 'Laptop para gaming de alta gama' },
          price: { type: 'number', example: 1299.99 },
          stock: { type: 'number', example: 10 },
          category: { type: 'string', example: 'Electronics' },
          isActive: { type: 'boolean', example: true },
          createdAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
          updatedAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' }
        }
      }
    }
  })
  async getAllProducts() {
    try {
      const products = await prisma.product.findMany({
        orderBy: { createdAt: 'desc' }
      });
      return {
        success: true,
        data: products,
        count: products.length
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        data: []
      };
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un producto por ID' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  @ApiResponse({ 
    status: 200, 
    description: 'Producto encontrado exitosamente'
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Producto no encontrado'
  })
  async getProductById(@Param('id') id: string) {
    try {
      const product = await prisma.product.findUnique({
        where: { id: parseInt(id) }
      });
      
      if (!product) {
        return {
          success: false,
          error: 'Producto no encontrado',
          data: null
        };
      }
      
      return {
        success: true,
        data: product
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        data: null
      };
    }
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiResponse({ 
    status: 201, 
    description: 'Producto creado exitosamente'
  })
  async createProduct(@Body() productData: {
    name: string;
    description?: string;
    price: number;
    stock?: number;
    category?: string;
  }) {
    try {
      const product = await prisma.product.create({
        data: {
          name: productData.name,
          description: productData.description,
          price: productData.price,
          stock: productData.stock || 0,
          category: productData.category
        }
      });
      
      return {
        success: true,
        data: product,
        message: 'Producto creado exitosamente'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        data: null
      };
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un producto' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  @ApiResponse({ 
    status: 200, 
    description: 'Producto actualizado exitosamente'
  })
  async updateProduct(@Param('id') id: string, @Body() productData: {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    category?: string;
    isActive?: boolean;
  }) {
    try {
      const product = await prisma.product.update({
        where: { id: parseInt(id) },
        data: productData
      });
      
      return {
        success: true,
        data: product,
        message: 'Producto actualizado exitosamente'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        data: null
      };
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un producto' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  @ApiResponse({ 
    status: 200, 
    description: 'Producto eliminado exitosamente'
  })
  async deleteProduct(@Param('id') id: string) {
    try {
      await prisma.product.delete({
        where: { id: parseInt(id) }
      });
      
      return {
        success: true,
        message: 'Producto eliminado exitosamente'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        data: null
      };
    }
  }
}
