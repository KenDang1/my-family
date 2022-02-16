import React, { useState } from 'react';
import { Link }  from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { saveAs } from "file-saver";

function PDFDoc ({ document }) {
    console.log('doc in PDFdoc', document);

    const saveFile = () => {
        saveAs(
          `documents/${document.filePath}`,
          `${document.fileName}`
        );
    };

    return (
        <Card sx={{ maxWidth: 345 }} onClick={saveFile}>
            <CardMedia
                component="img"
                max height="200"
                image={`documents/${document.filePath}`}
            />
            <CardContent>
            <Typography gutterBottom variant="h6">
                {document.fileName}
            </Typography>
            </CardContent>
        </Card>
    )
};

export default PDFDoc;
