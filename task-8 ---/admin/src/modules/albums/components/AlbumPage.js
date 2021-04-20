import React from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { useAlbum } from '../hooks/useAlbum';
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';

function AlbumPage() {
    const history = useHistory();
    const { albumId } = useParams();
    const { photos } = useAlbum(albumId);

    function onBackBtnClick() {
        console.log('onclick', history);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={onBackBtnClick}
                    variant="contained"
                    color="secondary"
                >
                    Hello World
                </Button>
                {/* <button onClick={onBackBtnClick}>Back</button> */}
            </div>
            <Grid container spacing={2}>
                {photos.map((photo) => (
                    <Grid item key={photo.id} xs={6} md={3}>
                        <Paper>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default AlbumPage;
