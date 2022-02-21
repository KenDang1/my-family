import React, { useState } from 'react';
import { Link, useHistory }  from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { saveAs } from "file-saver";
import { useDispatch } from "react-redux";


function PDFDoc ({ document, memberId }) {
    console.log('doc in PDFdoc', document);
    const dispatch = useDispatch();
    const history = useHistory();
    const saveFile = () => {
        saveAs(
            `documents/${document.filePath}`,
            `${document.fileName}`
        );
    };

    const deleteDoc = () => {
        dispatch({
            type: "DELETE_DOCUMENT",
            payload: {
                documentId: document.documentId,
                memberId: memberId

            }
        })
    } 


    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="200"
                image={`documents/${document.filePath}`}
            />
            <CardContent>
            <Typography gutterBottom variant="h8">
                {document.fileName}
            </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small" 
                    onClick={saveFile} 
                >
                    Download
                </Button>
                <Button onClick={deleteDoc}>Delete Doc</Button>
            </CardActions>
        </Card>
    )
};

export default PDFDoc;
